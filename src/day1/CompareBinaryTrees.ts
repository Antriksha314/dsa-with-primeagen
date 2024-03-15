export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // structural check
    if(!a && !b){
        return true
    }

    // structural check
    if(!a || !b){
        return false
    }
    //  value check
    if(a.value !== b.value){
        return false
    }
    return compare(a.left, b.left) && compare(a.right,b.right)

}