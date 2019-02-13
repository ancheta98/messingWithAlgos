//takes a list and deletes nodes indicated by a specific value
// 1 > 2 > 3 > 4 , 2 would return 1 > 3 > 4
// 1 > 2 > 3 > 2 > 2 > 4 > 2 , 2 would return 1 > 3 > 4
List.prototype.delete = function (nodeVal){
    let temp;
    if (this.head == null){
        return "no list"
    }else{
        while(this.head.next){
            let current = this.head;
            if(this.head.val == nodeVal.val){
                this.head = this.head.next
            }else {
                temp = current;
                current = current.next;
                if (current.val == nodeVal.val){
                    temp.next = current.next
                }
            }
        }
    }
}

sll = new List