const cl=console.log;

const hrcall=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=Math.random()>=.5? false:true;
            if(!error){
                resolve(`Candidate is eligible for 1st tech interview`)
            }else{
                reject(`Candidate is not fit for this profile`)
            }
            
        }, 1000);
    })
}

const firstTech=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=Math.random()>=.5 ? false:true;
            if(!error){
                resolve(`The candiadte is eligible for 2nd tech interview`)
            }else{
                reject(`The candidate is poor in basics`);
            }
            
        }, 1000);
    })
}


const secondTech=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=Math.random()>=.5? false:true;
            if(!error){
                resolve(`Candidate is eligible for Hr Interview`)
            }else{
                reject(`The candidate is struggling to write code`)
            }
        }, 1300);
    })
}


const mgr=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=Math.random()>=.3? false:true;
            if(!error){
                resolve(`Candidate is selected`)
            }else{
                reject(`The candidate is unable to justify his experience`)
            }
        }, 1300);
    })
}

hrcall()
    .then((res)=>{
        cl(res)
        return firstTech()
    })
    .then((res)=>{
        cl(res)
        return secondTech()

    })
    .then(res=>{
        cl(res)
        return mgr()
    })
    .then(res=>{
        Swal.fire({
            title:res,
            timer:3500,
            icon:`success`
           })
    })
    .catch((err)=>{
       Swal.fire({
        title:err,
        timer:3500,
        icon:`error`
       })
    })
