const slider = document.getElementById('slider')
const bardiv = document.getElementById('bars')
let arr = []

function displaybars(){
    n = slider.value
    bardiv.innerHTML = null
    arr = []
    for(let j=0;j<n;j++){
        var elem = parseInt(Math.random()*100)
        arr.push(elem)
    }
    for(let i=0;i<n;i++){
        if(n<=30){
            let height = arr[i]+100
            let newspan = `<span style="height:${height}px;" class="span-bar-large"></span>`
            bardiv.innerHTML = bardiv.innerHTML + newspan
        }
        else if(n>30 && n<60){
            let height = arr[i]+100
            let newspan = `<span style="height:${height}px;" class="span-bar-medium"></span>`
            bardiv.innerHTML = bardiv.innerHTML + newspan
        }
        else{
            let height = arr[i]+100
            let newspan = `<span style="height:${height}px;" class="span-bar-small"></span>`
            bardiv.innerHTML = bardiv.innerHTML + newspan
        }
    }
}

function reflectChange(arr,j){
	bardiv.innerHTML = null
    for(let i=0;i<arr.length;i++){
        if(arr.length<=30){
        	if(i==j){
	            let height = arr[i]+100
	            let newspan = `<span style="height:${height}px; background-color:blue;" class="span-bar-large"></span>`
	            bardiv.innerHTML = bardiv.innerHTML + newspan
	            }
	        else{
            	let height = arr[i]+100
            	let newspan = `<span style="height:${height}px;" class="span-bar-large"></span>`
            	bardiv.innerHTML = bardiv.innerHTML + newspan
        	}
        }

        else if(arr.length>30 && arr.length<60){
        	if(i==j){
	            let height = arr[i]+100
	            let newspan = `<span style="height:${height}px;background-color:blue;" class="span-bar-medium"></span>`
	            bardiv.innerHTML = bardiv.innerHTML + newspan
	            }
	        else{
            	let height = arr[i]+100
            	let newspan = `<span style="height:${height}px;" class="span-bar-medium"></span>`
            	bardiv.innerHTML = bardiv.innerHTML + newspan
        	}
        }
        else{
        	if(i==j){
	            let height = arr[i]+100
	            let newspan = `<span style="height:${height}px;background-color:blue;" class="span-bar-small"></span>`
	            bardiv.innerHTML = bardiv.innerHTML + newspan
	            }
	        else{
            	let height = arr[i]+100
            	let newspan = `<span style="height:${height}px;" class="span-bar-small"></span>`
            	bardiv.innerHTML = bardiv.innerHTML + newspan
        	}
    	}
    }
}

function sort(){
	var temp
	var count = 0
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr.length-i-1;j++){
			setTimeout(function(){
				if(arr[j]>arr[j+1]){
					temp = arr[j]
					arr[j] = arr[j+1]
					arr[j+1] = temp
				}
				reflectChange(arr,j+1)
			},20*count)
			count = count + 1
		}
	}
}

