function walk(curr: BinaryNode<number> | null, path: number[]): number[]{

    if(!curr){
        return path;
    }

    // 3 step recurse

    // recurse
    walk(curr.left, path)

    // pre (visiting node)
    path.push(curr.value)
    
    walk(curr.right, path)

    // post
    return path;
}



export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[])
}