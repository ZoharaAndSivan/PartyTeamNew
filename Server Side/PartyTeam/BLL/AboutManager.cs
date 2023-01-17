using DAL;
using DAL.Actions;
using DTO;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class AboutManager
    {
        public static AboutData GetAbout()
        {
            return AboutJSON.Get();
        }
        public static void PutAbout(AboutData a)
        {
            AboutJSON.Put(a);
        }
     

 
    }
}