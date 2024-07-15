const cl=console.log;

const hrcall=(skill)=>{
    //API call
    setTimeout(() => {
        if(skill.toLowerCase().includes("mean")){
            cl("Candidate is short listed for 1st interview");
            firstTech()

        }else{
            Swal.fire({
                title:"Candidate is does not fit for profile",
                icon:'error',
                timer:2500
               });
        }
        
    }, 2500);
}


const firstTech=()=>{
    setTimeout(() => {
        let error=Math.random()<.7? true:false
        if(!error){//takes as negataion of error value 
            cl(`Candidate is shortlisted for 2nd interview`);
            secondTech();
        }else{
           Swal.fire({
            title:"Candidate is very poor in Basics",
            icon:'error',
            timer:2500
           });
        }
        
    },1500);
}



const secondTech=()=>{
    setTimeout(() => {
        let error=Math.random()<.7 ? true:false;
        if(!error){ //takes as negataion of error value 
            cl(`Candidate is shortlisted for 3nd interview`);
            thirdTech();
        }else{
            Swal.fire({
                title:"Candidate is struggling to write code",
                icon:'error',
                timer:2500
               });
        }
        
    }, 1000);
}



const thirdTech=()=>{
    setTimeout(() => {
        let error=Math.random()<.7 ? true:false;
        if(!error){
            cl("Congrtas,You are selected ,Hr will call you back.")
        }else{
            Swal.fire({
                title:"Candidate failed to explain prevoius project",
                icon:'error',
                timer:2500,
               });
        }
        
    }, 500);
}
hrcall("mean");