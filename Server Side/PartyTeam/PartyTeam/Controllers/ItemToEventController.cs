using BLL;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PartyTeam.Controllers
{
    public class ItemToEventController : ApiController
    {
        //עובדדדדדדד
        // GET: api/ItemToEvent
        public List<itemtoeventDTO> Get() { return ItemToEventManager.GetItems(); }

        //עובדדדדדדד
        // GET: api/ItemToEvent/5
        public List<itemtoeventDTO> GetItemsByEventId(int id) { return ItemToEventManager.GetItemToEventByIdEvent(id); }

        //עובדדדדדדד
        // POST: api/ItemToEvent
        public void Post([FromBody]itemtoevent value) { ItemToEventManager.PostItem(value); }

        //לנסותתתת
        // PUT: api/ItemToEvent/5
        public void Put([FromBody]itemtoevent value) { ItemToEventManager.PutITE(value); }
        
        //עובדדדדדדד
        // DELETE: api/ItemToEvent/5
        public void Delete(int id) { ItemToEventManager.Delete(id); }
    }
}
