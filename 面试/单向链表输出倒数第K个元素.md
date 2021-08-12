## 快慢指针

两个指针同处于head，其中一个指针先移动k个数，然后两个指针一起移动，快指针为null则表示到底链表尾端，此时的慢指针即为最后K个元素。

```js
const findKthFromTail = (head,k) {
        // 效验参数
        if(head === null || k < 0) {
            return null
        }

        // 快慢指针
        let a = head,
            b= head
        
        // 移动快指针
        while(k) {
            a = a.next
            k--
            if(!a){
                return null
            }
        }

        // 一起移动
        while(a){
            b = b.next
            a = a.next
        }

        return b
}
```