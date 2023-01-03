using BLL;
using DAL;
using DTO;
using PartyTeam.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PartyTeam.Controllers
{
    public class CustomerController : ApiController
    {
        //עובדדדדדדדד
        // GET: api/Customer
        public List<customerDTO> Get() { return CustomerManager.GetCustomer(); }

        //עובדדדדדדדד
        // GET: api/Customer/5
        public List<customerDTO> GetCustomerById(int id) { return CustomerManager.GetCustomerById(id);  }

        [HttpPost]
        public IHttpActionResult PostLogin([FromBody]LoginBody user) {
            string e = user.email;
            string p = user.password;
            customerDTO loggedInUser = CustomerManager.LoginUser(e, p); 
            if(loggedInUser == null)
                  return BadRequest("שם משתמש או סיסמא שגויים");
            return Ok(loggedInUser);    
        }

        // עובדדדדד 
        // POST: api/Customer
        public customerDTO Post([FromBody]customer value) { return CustomerManager.PostCustomer(value); }

        //לנסות
        // PUT: api/Customer/5
        public void Put([FromBody]customer value) { CustomerManager.PutCustomer(value); }

        //עובדדדדדדד
        // DELETE: api/Customer/5
        public void Delete(int id) { CustomerManager.Delete(id); }
    }
}