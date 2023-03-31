import "./Expenseformcss.css";
function Expenseform()
{

    function display()
    {
     console.log(document.getElementById("texttitle").value);
     console.log(document.getElementById("textdate").value);
     console.log(document.getElementById("textprice").value);
    }
return(
<div>
<div className="expfrm">
        
        <div>
           <label htmlFor="texttite">Title</label>
           <input type="text" name="" id="texttitle" />
        </div>
           <div>
           <label htmlFor="textdate">Price</label>
          <input type="text" name="" id="textdate" />
        </div>
        <div>
           <label htmlFor="textprice">Date</label>
          <input type="date" name="" id="textdate" />
        </div>
        
    </div>
 <input className="button" type="button" value="Add Expense" onClick={display} />
</div>
)
}
export default Expenseform;