let cl=console.log;

let cardCon=document.getElementById("cardCon");

let blogsarr=[
    {
        title:"Angular 12",
        content:"Angular is Frontend Framework has a steep curve of leanring",
        blogid:"1223"
    },
    {
    title:"React",
    content:"React is Frontend Framework has a vertical curve of leanring",
    blogid:"122"
}
];

let blogsData=[];

const createCard=(blog)=>{
    setTimeout(() => {
        let error=Math.random()<.5? true:false;
        if(!error){
            cl(`Blog created successfully`)
            fetchBlog()
            blogsarr.push(blog)
        }else{
            throw new Error(`Something Went wrong`);
        }
        
    }, 1400);
}

const fetchBlog=()=>{
    setTimeout(() => {
        let error=Math.random()<.5? true:false;
        if(!error){
            cl(`Data fetched Succuessfully`)
            blogsData=blogsarr;
            createBlogCard(blogsData)
        }
        else{
            throw new Error('Something Went Wrong')
        }
        
    }, 1500);
}

const createBlogCard = (arr)=>{
    if(arr.length==0){
        alert(`Please Provide Valid Data `);
    }
    let res=``;

    arr.forEach(ele=>{
        res+=`<div class="col-md-4 " >
        <div class="card">
                    <div class="card-header">
                        <h2 class="m-0">${ele.title}</h2>
                    </div>
                    <div class="card-body">
                        <p class="mb-2">${ele.content}</p>
                    </div>
                    <div class="card-footer">
                        <button class=" btn btn-sm btn-outline-primary">Edit</button>
                        <button class=" btn btn-sm btn-outline-danger">Remove</button>
                    </div>
                </div>
                </div>
        `

    })
    cardCon.innerHTML=res;

}

createCard({
    title:"Spring Boot",
    content:"JAVA FRAMEWORK",
    blogid:"12345"
})