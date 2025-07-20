document.getElementById('Resume').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link
    const link = document.createElement('a');
    link.href = './assets/ShubhamMahajan_Resume.pdf'; // Use the correct relative or absolute path
    link.download = 'Shubham Mahajan.pdf'; // Set the download file name
    document.body.appendChild(link); // Temporarily add the link to the document
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after the download
}); 


