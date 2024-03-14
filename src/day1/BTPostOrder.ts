function walk(curr: BinaryNode<number> | null, path: number[]): number[]{

    if(!curr){
        return path;
    }

    // 3 step recurse

    // recurse
    walk(curr.left, path)
    walk(curr.right, path)

    // pre (visiting node)
     path.push(curr.value)

    // post
    return path;
}



export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[])
}