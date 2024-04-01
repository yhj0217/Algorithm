def solution(m, n, board):
    board = [list(x) for x in board]
    matched = True
    
    while matched:
        matched = []
        for i in range(m - 1):
            for j in range(n - 1):
                if board[i][j] == board[i][j+1] == board[i+1][j] == board[i+1][j+1] != 0:
                    matched.append((i, j))
        
        for i, j in matched:
            board[i][j] = board[i][j+1] = board[i+1][j] = board[i+1][j+1] = 0
        
        for _ in range(m):
            for i in range(m-1, 0, -1):
                for j in range(n):
                    if board[i][j] == 0:
                        board[i][j], board[i-1][j] = board[i-1][j], board[i][j]
    
    return sum(i.count(0) for i in board)