const button = document.getElementById('button')
const name = document.getElementsByClassName('in')[0]
const lname = document.getElementsByClassName('inp')[0]
const email = document.getElementsByClassName('email')[0]
const text = document.getElementsByClassName('textA')[0]
const radio = document.getElementsByClassName('radio')
const checkbox = document.getElementsByClassName('check')[0]



button.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(name.value.trim() === ''  || lname.value.trim() === '' || email.value.trim() === '' || text.value.trim() === ''){
        alert('Error: Input Fields cannot be empty')
    } else if(!checkbox.checked){
        alert('Agree To the Terms Below')
    } else if(!Array.from(radio).some(radio=>radio.checked)){
        alert('Please Select a Query Type')
    }else {
        alert('Successfully Sent!!')
        setTimeout(()=>{
            alert(name.value + ' ' + lname.value + ' we will get back to you on ' + email.value)
            window.location.reload()
        }, 2000)
        
    }
})