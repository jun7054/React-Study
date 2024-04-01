import pygame
import random

# 화면 크기 및 색상 정의
SCREEN_WIDTH = 540
SCREEN_HEIGHT = 540
BLOCK_SIZE = SCREEN_WIDTH // 18
GRID_WIDTH = SCREEN_WIDTH // BLOCK_SIZE
GRID_HEIGHT = SCREEN_HEIGHT // BLOCK_SIZE
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
COLORS = [(0, 255, 255), (0, 0, 255), (255, 165, 0), (255, 255, 0), (0, 255, 0), (128, 0, 128), (255, 0, 0)]

# 테트리스 블록 정의
tetris_shapes = [
    [[1, 1, 1],
     [0, 1, 0]],

    [[0, 2, 2],
     [2, 2, 0]],

    [[3, 3, 0],
     [0, 3, 3]],

    [[4, 0, 0],
     [4, 4, 4]],

    [[0, 0, 5],
     [5, 5, 5]],

    [[6, 6, 6, 6]]
]

# 게임 보드 초기화
def create_board():
    return [[0] * GRID_WIDTH for _ in range(GRID_HEIGHT)]

# 블록 회전
def rotate_shape(shape):
    return [ [ shape[y][x] for y in range(len(shape)) ] for x in range(len(shape[0]) - 1, -1, -1) ]

# 블록 생성
def new_piece():
    shape = random.choice(tetris_shapes)
    color = random.choice(COLORS)
    return {'shape': shape, 'color': color, 'x': GRID_WIDTH // 2 - len(shape[0]) // 2, 'y': 0}

# 블록이 보드에 충돌하는지 확인
def is_valid_position(board, shape, offset):
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell and (offset['y'] + y >= GRID_HEIGHT or offset['x'] + x < 0 or offset['x'] + x >= GRID_WIDTH or board[offset['y'] + y][offset['x'] + x]):
                return False
    return True

# 보드에 블록 추가
def add_piece_to_board(board, piece):
    for y, row in enumerate(piece['shape']):
        for x, cell in enumerate(row):
            if cell:
                board[piece['y'] + y][piece['x'] + x] = piece['color']

# 줄이 완전히 채워졌는지 확인하고 삭제
def remove_complete_lines(board):
    lines_removed = 0
    y = GRID_HEIGHT - 1
    while y >= 0:
        if all(board[y]):
            del board[y]
            board.insert(0, [0] * GRID_WIDTH)
            lines_removed += 1
        else:
            y -= 1
    return lines_removed

# 메인 게임 함수
def main():
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    clock = pygame.time.Clock()
    pygame.display.set_caption("Tetris")

    board = create_board()
    piece = new_piece()
    fall_time = 0
    fall_speed = 0.5
    move_speed = 0.5
    moving_left = False
    moving_right = False
    rotation = False
    game_over = False

    while not game_over:
        screen.fill(WHITE)
        # 키 이벤트 처리
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    moving_left = True
                elif event.key == pygame.K_RIGHT:
                    moving_right = True
                elif event.key == pygame.K_UP:
                    rotation = True

        # 블록 이동 및 회전
        if moving_left:
            piece['x'] -= 1
            if not is_valid_position(board, piece['shape'], piece):
                piece['x'] += 1
        if moving_right:
            piece['x'] += 1
            if not is_valid_position(board, piece['shape'], piece):
                piece['x'] -= 1
        if rotation:
            piece['shape'] = rotate_shape(piece['shape'])
            if not is_valid_position(board, piece['shape'], piece):
                piece['shape'] = rotate_shape(piece['shape'])
        moving_left = moving_right = rotation = False

        # 블록 떨어뜨리기
        if pygame.time.get_ticks() - fall_time > fall_speed * 1000:
            piece['y'] += 1
            if not is_valid_position(board, piece['shape'], piece):
                piece['y'] -= 1
                add_piece_to_board(board, piece)
                lines_removed = remove_complete_lines(board)
                if lines_removed:
                    # 점수 계산 또는 레벨 업 등의 처리
                    pass
                piece = new_piece()
                if not is_valid_position(board, piece['shape'], piece):
                    game_over = True
            fall_time = pygame.time.get_ticks()

        # 블록 그리기
        for y, row in enumerate(board):
            for x, cell in enumerate(row):
                if cell:
                    pygame.draw.rect(screen, cell, (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))
                    pygame.draw.rect(screen, BLACK, (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE), 1)

        for y, row in enumerate(piece['shape']):
            for x, cell in enumerate(row):
                if cell:
                    pygame.draw.rect(screen, piece['color'], ((piece['x'] + x) * BLOCK_SIZE, (piece['y'] + y) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))
                    pygame.draw.rect(screen, BLACK, ((piece['x'] + x) * BLOCK_SIZE, (piece['y'] + y) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE), 1)

        pygame.display.update()
        clock.tick(30)

    pygame.quit()

if __name__ == '__main__':
    main()
