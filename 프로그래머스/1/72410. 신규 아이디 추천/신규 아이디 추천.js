function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/\.+/g, '.');
    if(new_id[0] == '.'){
        new_id = new_id.slice(1)
    }
    if(new_id[new_id.length - 1] == '.'){
        new_id = new_id.slice(0,-1)
    }
    if(new_id === '') new_id += 'a'
    if(new_id.length >= 16) new_id = new_id.slice(0,15)
    if(new_id[new_id.length - 1] == '.'){
        new_id = new_id.slice(0,-1)
    }
    while (new_id.length <= 2) {
        new_id += new_id[new_id.length - 1];
    }
    return new_id;
}