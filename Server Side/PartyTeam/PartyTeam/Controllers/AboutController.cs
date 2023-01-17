using BLL;
using DAL;
using DAL.Actions;
using DTO;
using Models;
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
        public AboutData Get() { return AboutManager.GetAbout(); }

        //לנסות
        // PUT: api/About/5
        public void Put([FromBody] AboutData value) { AboutManager.PutAbout(value); }

    }
}