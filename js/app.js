const submitForm = document.getElementById('submitForm');
const yourName = document.getElementById('yourName');
const yourCrush = document.getElementById('yourCrush');
const results = document.getElementById('results');
const loader = document.getElementById('loader');

//submit the form
submitForm.addEventListener('submit',function(e){
    e.preventDefault();
    
    //check if the all the form is filled
    if(yourCrush.value === '' || yourName.value === ''){
        alert('Please Fill all the Fields!');
    }else{
        //Get the user input data
        const you = yourName.value;
        const crush = yourCrush.value;

        //get the data to the db

        db.collection('data').add({
            You:you,
            Crush:crush
        })

        //get the data
        getPercentage(you,crush)
            .then(data => {
                getData(data)
            })
            .then(clear())
            .catch(err => console.log(err))
    }
})

//fething data
function getData(data){
    results.innerHTML = `
    <div class="card">
        <div class="card-content">
        <p class="title">
            <span class="you">${data.fname}</span> +
            <span class="crush">${data.sname}</span>
        </p>
        <img
            src="https://www.lovecalculator.com/dist/images/lovecalculator-heart.svg"
        />
        <span id="percentage">${data.percentage}%</span>
        </div>
        <div class="notification is-danger">
        ${data.result}
        </div>
    </div>
    `
}



//clear
function clear(){
    yourName.value = '';
    yourCrush.value = ''
}