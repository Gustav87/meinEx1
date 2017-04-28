Vagrant.configure(2) do |config|

  config.vm.box = "hashicorp/precise32"

  config.vm.network "forwarded_port", guest: 3000, host: 3000, host-ip: "localhost", id: "ssh"

  config.vm.network "forwarded_port", guest: 5858, host: 5858, host-ip: "localhost", id: "ssh"

  config.vm.provision :shell, :path => "provision.sh"
  config.vm.provision :shell, :path => "install-node.sh", privileged: false
end
