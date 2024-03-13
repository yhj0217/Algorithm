def solution(files):
    answer = []
    for file in files:
        h,n,t = '','',''
        
        num_end = False
        for i in range(len(file)):
            if file[i].isdigit():
                n += file[i]
                num_end = True
            elif not num_end:
                h += file[i]
            else:
                t = file[i:]
                break
        answer.append((h,n,t))
        
    answer.sort(key=lambda x: (x[0].upper(), int(x[1])))
    
    return [''.join(i) for i in answer]