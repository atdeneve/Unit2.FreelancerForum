const freelancers = [
  { name: 'Alex', price: 100, occupation: 'programmer' },
  { name: 'Elyssa', price: 200, occupation: 'engineer' },
  { name: 'Annie', price: 150, occupation: 'occupational therapist' },
  { name: 'Ty', price: 80, occupation: 'tech sales' },
  { name: 'Emily', price: 120, occupation: 'construction operations' },
  { name: 'Quin', price: 130, occupation: 'real estate' },
];

const averagePriceContainer = document.querySelector('.average-price');
const nameContainer = document.querySelector('.name-list');
const priceContainer = document.querySelector('.price-list');
const occupationContainer = document.querySelector('.occupation-list');

const addFreelancerInterval = setInterval(addFreelancer, 1000);
let totalStartingPrice = 0;

function addFreelancer() {
  const freelancer = freelancers.shift(); // Remove the first element from the array

  if (freelancer) {
    // Add Name
    const nameElement = document.createElement('li');
    nameElement.classList.add(freelancer.name);
    nameElement.textContent = freelancer.name;
    nameContainer.appendChild(nameElement);

    // Add Price
    const priceElement = document.createElement('li');
    priceElement.classList.add(freelancer.name); // You can use a different class if needed
    priceElement.textContent = freelancer.price;
    priceContainer.appendChild(priceElement);

    // Add Occupation
    const occupationElement = document.createElement('li');
    occupationElement.classList.add(freelancer.name); // You can use a different class if needed
    occupationElement.textContent = freelancer.occupation;
    occupationContainer.appendChild(occupationElement);

    totalStartingPrice += freelancer.price;

    const averageStartingPrice = totalStartingPrice / nameContainer.children.length;
    averagePriceContainer.textContent = `The average starting price is $${averageStartingPrice.toFixed(2)}`;

  } else {
    clearInterval(addFreelancerInterval); // Stop the interval if all freelancers are added
  }
}
