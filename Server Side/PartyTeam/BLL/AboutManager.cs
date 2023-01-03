using DAL;
using DAL.Actions;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class AboutManager
    {
        public static List<about> GetAbout()
        {
            return About.Get();
        }
        public static void PutAbout(about a)
        {
            About.Put(a);
        }
        public static void Delete(int i)
        {
            About.Delete(i);
        }
    }
}