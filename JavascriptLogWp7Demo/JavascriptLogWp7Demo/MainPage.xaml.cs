using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;

namespace JavascriptLogWp7Demo
{
    public partial class MainPage : PhoneApplicationPage
    {
        protected String url;

        // Constructor
        public MainPage()
        {
            InitializeComponent();
            // replace with the url you are debugging
            url = "http://localhost/test.html";
            webBrowser1.Navigate(new Uri(url, UriKind.Absolute));
            webBrowser1.IsScriptEnabled = true;
        }

        private void Logger(object sender, NotifyEventArgs e)
        {
            //Logging statements from javascript
            System.Diagnostics.Debug.WriteLine(e.Value);
        }
    }
}