

function submit(){

     let color= document.getElementById("color").value;
     let origin= document.getElementById("origin").value;
    let season= document.getElementById("season").value;
    let taste= document.getElementById("taste").value;
    let seed= document.getElementById("seed").value;
   
    
    var arr1=[{
        name:"apple",
        color:'red',
        origin:'kazakhstan',
        season:'all season',
        taste:'sweet',
        seed: 'yes', 
    },
    {   
        name:'strawberry',
        color:'red',
        origin:'europe',
        season:'spring',
        taste:'sour',
        seed:'yes',
    },
    {   
        name:'pomogranate',
        color:'red',
        origin:'india',
        season:'winter',
        taste:'sweet',
        seed:'yes',
    },
    {   
        name:'Banana',
        color:'yellow',
        origin:'india',
        season:'summer',
        taste:'sweet',
        seed:'no',
    },
    {   
        name:'Mango',
        color:'yellow',
        origin:'india',
        season:'summer',
        taste:'sweet',
        seed:'yes',
    },
    {   
        name:'Pineapple',
        color:'yellow',
        origin:'brazil',
        season:'all season',
        taste:'sweet',
        seed:'no',
    },
    {   
        name:'Pear',
        color:'green',
        origin:'china',
        season:'summer',
        taste:'sweet',
        seed:'yes',
    },
    {   
        name:'kiwi',
        color:'green',
        origin:'china',
        season:'winter',
        taste:'sweet',
        seed:'yes',
    },
    {   
        name:'grape',
        color:'green',
        origin:'china',
        season:'summer',
        taste:'sour',
        seed:'no',
    },
    ]
    var table = document.getElementById('table');
    let result=[]
    if(color)
    result=arr1.filter(obj=>obj.color==color)

    console.log("After filtering the color result: ", result)
    
    if(origin)
    result=result.filter(obj=>obj.origin===origin)
    
    console.log("After filtering the origin result: ", result)
    if(season)
    result=result.filter(obj=>obj.season===season)
    
    console.log("After filtering the season result: ", result)
    if(taste)
    result=result.filter(obj=>obj.taste===taste)
    
    console.log("After filtering the taste result: ", result)
    if(seed)
    result=result.filter(obj=>obj.seed===seed)
    
    console.log("After filtering the seed result: ", result)




   result.forEach(function(object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.name + '</td>' + 
                         '<td>' + object.color + '</td>' +
                         '<td>' + object.origin + '</td>' +
                         '<td>' + object.season + '</td>'+
                         '<td>'+ object.taste+'</td>'+
                         '<td>' + object.seed + '</td>';
        table.appendChild(tr);
    })
   
    
}
