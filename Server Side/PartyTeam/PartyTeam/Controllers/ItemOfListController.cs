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
    public class ItemOfListController : ApiController
    {
        //עובדדדדדדדדד
        // GET: api/ItemOfList
        public List<itemoflistDTO> Get() { return ItemOfListManager.GetItemOfList(); }

        //עובדדדדדדדדד
        // GET: api/ItemOfList/5
        public List<itemoflistDTO> GetItemById(int id) { return ItemOfListManager.GetItemOfListById(id); }
        
        //לא עובדדדדדדדדד
        // POST: api/ItemOfList
        public void Post([FromBody]ItemOfList value) { ItemOfListManager.PostItemOfList(value); }

        //לנסות
        // PUT: api/ItemOfList/5
        public void Put([FromBody]ItemOfList value) { ItemOfListManager.PutIOL(value); }

        //עובדדדדדדדדדד
        // DELETE: api/ItemOfList/5
        public void Delete(int id) { ItemOfListManager.DeleteItem(id); }
    }
}