using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace TestEins
{
    public class TestHub : Hub
    {
        public TestHub() {

        }

        public void SendMessage(String sender, String message)
        {
            Clients.All.sendMessage(sender, message);
        }
    }
}