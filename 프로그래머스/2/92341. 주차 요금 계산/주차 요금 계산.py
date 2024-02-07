import math

def solution(fees, records):
    answer = []
    car = {}
    times = {}
    maxTime = 24 * 60 -1


    for i in records:
        time, car_number, status = i.split()
        hour, minute = map(int, time.split(':'))
        current_time = hour * 60 + minute

        if status == "IN":
            car[car_number] = current_time
        elif status == "OUT":
            parked_time = current_time - car[car_number]
            if car_number in times:
                times[car_number] += parked_time
            else:
                times[car_number] = parked_time
            del car[car_number]

    for num in car:
        if num not in times:
            times[num] = maxTime - car[num]
        else:
            times[num] += maxTime - car[num]
            
    for num, time in sorted(times.items()):
        if time <= fees[0]:
            answer.append(fees[1])
        else:
            answer.append(fees[1] + math.ceil((time - fees[0]) / fees[2]) * fees[3])

    return answer