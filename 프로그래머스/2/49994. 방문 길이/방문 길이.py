def solution(dirs):
    move  = {'U': (0,1), 'D': (0,-1), 'L': (-1,0), 'R': (1,0)}
    visited = []
    x,y = (0,0)
    
    for i in dirs:
        nx, ny = x + move[i][0], y + move[i][1]
        
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            if (x, y, nx, ny) not in visited and (nx, ny, x, y) not in visited:
                visited.append((x, y, nx, ny))

            x, y = nx, ny
            
    return len(visited)