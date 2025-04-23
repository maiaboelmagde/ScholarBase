const bins = document.getElementsByClassName("binImg");
Array.from(bins).forEach(bin =>{
    bin.addEventListener('click',async()=>{
        studentID = bin.getAttribute('data-id');
        const confirmed = confirm("Are you sure,you wanna delete this student..");
        if(confirmed){ ////Use AJAX to send a DELETE request:
            try {
                const response = await fetch(`/Students/${studentID}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
    
                if (response.ok) {
                  alert("Student deleted successfully!");
                  location.reload(); // Refresh page
                } else {
                  alert("Failed to delete student.");
                }
              } catch (error) {
                console.error("Error:", error);
                alert("Something went wrong.");
              }
        }
    });
});