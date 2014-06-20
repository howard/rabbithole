The Rabbit Hole
===============

This is a replacement for the default web interface of the [PirateBox](http://piratebox.cc). The
features of the default UI have been replicated at this point, and work is underway to enhance
functionality.


Online Install
--------------

The easiest way to get started is using the online install script on a computer that is connected
to the Internet. This script is intended for use in GNU/Linux environments, but is generic enough
to work on other Unix-like systems as well.

Default parameters are geared towards an OpenWRT-based PirateBox, and it is assumed, that SSH
access for root is available. The script might work as well for Raspberry Pi, possibly even mobile
devices, but you should be careful when selecting the PirateBox install path.

1.  `wget http://tinyurl.com/rabbithole-install`
2.  `sh -e install-online`
3.  After the initial download of the Rabbit Hole data, you will be asked to connect to the
    PirateBox.
4.  Follow the instructions and provide data as requested. If you run an unmodified OpenWRT-based
    PirateBox, you shouldn't have to change anything.
5.  Enter the PirateBox root password when requested after confirming your intention to install.
6.  After install, you may want to change your SSID. Follow the official instructions on the
    [PirateBox site](http://piratebox.cc/openwrt:mods).


Manual Install
--------------

1.  Download the [Rabbit Hole data](https://github.com/howard/rabbithole/archive/master.zip) to
    a computer.
2.  Copy the ZIP onto the PirateBox, e.g. using `scp`. Make sure that the destination directory
    is located on memory with sufficient capacity, so avoid RAM and most of the root filesystem
    on OpenWRT devices.
3.  Unpack the ZIP on the PirateBox.
4.  Copy the contents of `rabbithole-master/www` to the `www` folder of the PirateBox install. On
    the OpenWRT variant, this is `/opt/piratebox/www`.
5.  Copy the contents of `rabbithole-master/share/Shared` to all browsable file directories. On the
    OpenWRT variant, this is `/opt/piratebox/share/Shared` and all its subdirectories.


Acknowledgement
---------------

The logo was created by an anonymous /g/ denizen. If you recognize your own work, please step
forward so you can be credited properly!
