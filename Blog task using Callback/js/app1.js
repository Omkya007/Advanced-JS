const cl=console.log

let blogsArr=[
	{
		title:"Anular 8 ",
		content:"Reomoves Modular Struture ,Supports Database Querying",
		blogid:"1234",
	},
	{
		title:"Anular 18",
		content:"Reomoves Modular Struture ,Supports Database Querying",
		blogid:"1223",
	}
]

let blogsData=[];
//We get here a new object from user has created a blog
const createBlog=(blog)=>{
    
    
    //API call (async) send Data to DB
    setTimeout(() => {
        let error=Math.random()<.5 ? true:false;
        if(!error){
            blogsArr.push(blog)
            cl("New Post Created Successfully")
            fetchBlogs()
        }else{
        throw new Error("Something Went Wrong");
        }
       
        
    }, 3000);
} 

const fetchBlogs=()=>{
    //API call to fetch all data from DB
    setTimeout(() => {
        let error = Math.random()<.5 ?true:false;
        if(!error){
            blogsData=blogsArr;
        cl("Data fecthed Successfully")
        createBlogCard(blogsData);
        }else{
            throw new Error(`Something Went Wrong`);
        }
    }, 2000);
}

const createBlogCard=(arr)=>{
    if(arr.length==0){
		alert(`please provide the Valid Data `)
	}

	let result='';
	arr.forEach(ele=>{
		result+=`<div class="col-md-4 mb-4" >
                <div class="card">
                    <div class="card-header">
                        <h2 class="m-0">${ele.title}</h2>

                    </div>
                    <div class="card-body">
                        <p class="m-0">
                            ${ele.content}
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-sm btn-outline-info">Edit</button>
                        <button class="btn btn-sm btn-outline-danger">Remove</button>
                    </div>
                </div>
            </div>`
	});
	cardContainer.innerHTML=result;
}

createBlog({
    title:"Rxjs",
    content:"It is used for state management in Angular",
    blogid:"4567"
})


