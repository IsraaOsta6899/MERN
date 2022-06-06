class Node {
    constructor(value){
        this.left=this.right=null;
        this.value=value;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    insertt(root,value){
        

        if(this.root==null){
            this.root= new Node(value);
            return this.root
        }
        else if(value <this.root.value){
            root.left=this.insertt(root.left,value)
            return this.root
        }
        else{
            root=this.insertt(root.right,value)
            return this.root
        }
        
    }
}
        console.log(";;;;;;;;;;;;;;;;;;")

var myTree= new BST()
tree=myTree.insertt(myTree.root,5)
console.log("111111111111111111")

myTree.insertt(myTree.root,1)
console.log("22222222222222")




