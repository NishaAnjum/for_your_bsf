let distance = 0; // Initial distance between the objects
const moveAmount = 10; // Amount to move closer each click
const containerWidth = 400; // Width of the container
const objectWidth = 50; // Width of each object

document.getElementById('moveButton').addEventListener('click', () => {
    distance += moveAmount; // Increase the distance
    const object1 = document.getElementById('object1');
    const object2 = document.getElementById('object2');

    // Move object1 to the right
    object1.style.left = `${distance}px`;

    // Move object2 to the left
    object2.style.right = `${distance}px`;

    // Check if the objects have met in the center
    if (distance >= (containerWidth / 2) - (objectWidth / 2)) {
        // Redirect to the wish page
        window.location.href = 'wish.html';
    }
});