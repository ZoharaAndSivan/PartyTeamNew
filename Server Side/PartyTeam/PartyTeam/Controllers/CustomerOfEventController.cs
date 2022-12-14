using BLL;
using DAL;
using DAL.Actions;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PartyTeam.Controllers
{
    public class CustomerOfEventController : ApiController
    {
        //עובדדדדדד
        // GET: api/CostomerOfEvent
        public List<customerofeventDTO> Get() { return CustomerOfEventManager.GetCustomers(); }

        //עובדדדדדד
        // GET: api/CostomerOfEvent/GetCustomerOfEventByEventId/5
        public List<customerofeventDTO> GetCustomerOfEventByEventId(int id) { return CustomerOfEventManager.GetCustomerOfEventById(id); }
        public List<customerofeventDTO> GetCustomersConfirmedArrival(int id) { return CustomerOfEventManager.GetCustomersConfirmedArrival(id); }
        public List<customerofeventDTO> GetCustomersNotConfirmedArrival(int id) { return CustomerOfEventManager.GetCustomersNotConfirmedArrival(id); }

        //עובדדדדדד לא
        // POST: api/CostomerOfEvent
        public customerofeventDTO Post([FromBody] customerofevent value) { return CustomerOfEventManager.PostCustomerOfEvent(value); }

        //עובדד  
        // PUT: api/CostomerOfEvent/5
        public void Put([FromBody] customerofevent value) { CustomerOfEventManager.PutCOE(value); }
        [HttpPut]
        public customerofevent ConfirmArrival([FromBody] customerofevent cust)
        {
            string email = cust.Email;
            bool answer = (bool)cust.Status;
            return CustomerOfEventManager.ConfirmArrival(email, answer);
        }

        //עובדדדדדד
        // DELETE: api/CostomerOfEvent/5
        public void Delete(int id) { CustomerOfEventManager.Delete(id); }
    }
}