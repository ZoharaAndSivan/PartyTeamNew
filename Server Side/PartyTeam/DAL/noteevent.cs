//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class noteevent
    {
        public int Id { get; set; }
        public Nullable<int> CelebrationId { get; set; }
        public Nullable<bool> ToShow { get; set; }
        public string Note { get; set; }
    
        public virtual celebration celebration { get; set; }
    }
}
