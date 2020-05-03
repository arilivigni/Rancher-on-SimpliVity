(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{416:function(e,t,a){"use strict";a.r(t);var r=a(35),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"admin-cluster-and-rancher-server-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-cluster-and-rancher-server-configuration"}},[e._v("#")]),e._v(" Admin cluster and Rancher server configuration")]),e._v(" "),a("p",[e._v("The playbooks deploy an admin cluster and a separate user cluster. The user cluster\nis deployed from the Rancher server installed on the admin cluster and the configuration for the user cluster is\ndocumented "),a("a",{attrs:{href:"rancher-user-config"}},[e._v("here")]),e._v(".")]),e._v(" "),a("p",[e._v("The nodes in the admin cluster are determined by the\nentries in the "),a("code",[e._v("hosts")]),e._v(" file and are provisioned by the playbooks based on the configuration in this section.")]),e._v(" "),a("p",[e._v("General configuration variables are shown in the table below:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("cluster_name")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the K8S admin cluster")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("admin_folder")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Folder and pool name for Rancher admin cluster VMs and templates")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("admin_template")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name for the admin template")])])])]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("admin_template")]),e._v(" already exists, it is used when provisioning the VMs for the admin cluster and\nthe load balancers. Otherwise, this template is created from the default Ubuntu OVA\nspecified in the file "),a("code",[e._v("playbooks/roles/kits/tasks/main.yml")]),e._v(" and then used when provisioning the VMs.")]),e._v(" "),a("h2",{attrs:{id:"rancher-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rancher-configuration"}},[e._v("#")]),e._v(" Rancher configuration")]),e._v(" "),a("p",[e._v("Rancher configuration is specified using the "),a("code",[e._v("rancher")]),e._v(" dictionary element in the "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(" file:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("rancher.url")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("FQDN at which Rancher Server can be reached")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("rancher.hostname")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Usually the same FQDN as the one in "),a("code",[e._v("rancher.url")]),e._v(" but not necessarily")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("rancher.validate_certs")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("rancher.apiversion")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Playbooks designed for v3 of the API")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("rancher.engineInstallURL")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Location of script for installing Docker on all node templates")])])])]),e._v(" "),a("p",[e._v("An example "),a("code",[e._v("rancher")]),e._v(" structure is shown below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rancher:\n  url: https://rancher.hpe.org\n  hostname: rancher.hpe.org\n  validate_certs: False\n  apiversion: v3\n  engineInstallURL: 'https://releases.rancher.com/install-docker/19.03.sh'\n")])])]),a("h2",{attrs:{id:"ssl-tls-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls-configuration"}},[e._v("#")]),e._v(" SSL/TLS configuration")]),e._v(" "),a("p",[e._v("Rancher Server is designed to be secure by default and requires SSL/TLS configuration. There are three options for the source of the certificates:")]),e._v(" "),a("ol",[a("li",[e._v("Rancher Generated Certificates")]),e._v(" "),a("li",[e._v("Let's Encrypt")]),e._v(" "),a("li",[e._v("Certificates from Files")])]),e._v(" "),a("p",[e._v("These playbooks support option 1 and option 3. You specify which one to use by configuring the variable "),a("code",[e._v("rancher.tls_source")]),e._v(" in "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(". The accepted values are "),a("code",[e._v("rancher")]),e._v(" for option 1, and "),a("code",[e._v("secret")]),e._v(" for option 3. The default is "),a("code",[e._v("rancher")]),e._v(" which means that the example above is equivalent to what is shown below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rancher:\n  url: https://rancher.hpe.org\n  hostname: rancher.hpe.org\n  version: 2.3.6\n  validate_certs: False\n  apiversion: v3\n  engineInstallURL: 'https://releases.rancher.com/install-docker/19.03.sh'\n  tls_source: rancher\n")])])]),a("p",[e._v("If you want to supply your own certificates, you need to set "),a("code",[e._v("rancher.tls_source")]),e._v(" to "),a("code",[e._v("secret")]),e._v(" and let the playbooks know where to find your certificates as shown in the example below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rancher:\n  url: https://rancher.hpe.org\n  hostname: rancher.hpe.org\n  validate_certs: False\n  apiversion: v3\n  engineInstallURL: 'https://releases.rancher.com/install-docker/19.03.sh'\n  tls_source: secret\n  tls_privateCA: true\n  tls_cacert_file: /home/core/certs/cacerts.pem\n  tls_certchain_file: /home/core/certs/cachain.pem\n  tls_certkey_file: /home/core/certs/tlskey.pem\n")])])]),a("p",[e._v("The "),a("code",[e._v("rancher.tls_privateCA")]),e._v(" variable is set to "),a("code",[e._v("true")]),e._v(" if the certificates are signed by a private root Certificate Authority (root CA). In this case, you need to supply the certificate of the root CA using "),a("code",[e._v("rancher.tls_cacert_file")]),e._v(". In the example above, the root CA certificate was stored in "),a("code",[e._v("/home/core/certs/cacerts.pem")]),e._v(". Note that all certificates use the PEM format.")]),e._v(" "),a("p",[e._v("The certificate and key that the Rancher Server should used is specified with the variables "),a("code",[e._v("rancher.tls_certchain_file")]),e._v(" and "),a("code",[e._v("rancher.tls_certkey_file")]),e._v(". These variables should be configured with the names of the files that contain the SSL certificate and key that the Rancher Server should use. Note that the file designated by "),a("code",[e._v("rancher.tls_certchain_file")]),e._v(" contains the certificate of the Rancher Server itself, followed by the certificates of intermediate CAs if any.")])])}),[],!1,null,null,null);t.default=s.exports}}]);