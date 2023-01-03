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
    public class AboutController : ApiController
    {
        //עובדדדדדדדד
        // GET: api/About
        public List<about> Get() { return AboutManager.GetAbout(); }

        //לנסות
        // PUT: api/About/5
        public void Put([FromBody] about value) { AboutManager.PutAbout(value); }

        //עובדדדדדדד
        // DELETE: api/About/5
        public void Delete(int id) { AboutManager.Delete(id); }
    }
}