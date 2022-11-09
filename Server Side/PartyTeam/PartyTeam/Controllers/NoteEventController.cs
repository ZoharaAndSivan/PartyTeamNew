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
    public class NoteEventController : ApiController
    {
        //עובדדדדדדד
        // GET: api/NoteEvent
        public List<noteeventDTO> Get() { return NoteEventManager.GetNotes(); }
        
        //עובדדדדדדד
        // GET: api/NoteEvent/5        
        public List<noteeventDTO> GetItemsByEventId(int id) { return NoteEventManager.GetNoteEventById(id); }

        //עובדדדדדדד
        // POST: api/NoteEvent    
        public void Post([FromBody]noteevent value) { NoteEventManager.PostItem(value); }

        //לנסותת
        // PUT: api/NoteEvent/5
        public void Put([FromBody]noteevent value) { NoteEventManager.PutNE(value); }
        
        //עובדדדדדדד
        // DELETE: api/NoteEvent/5
        public void Delete(int id) { NoteEventManager.Delete(id); }
    }
}
