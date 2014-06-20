#!/bin/sh -e

# Run this script on your computer that is connected to the Internet for easiest
# installation of The Rabbit Hole. You will be asked to connect to the
# PirateBox in the process.
# The default values are geared towards the OpenWRT variant of the PirateBox.
# To use it on the Raspberry Pi or on mobile phones, some changes may be
# necessary.

download_url="https://github.com/howard/rabbithole/archive/master.zip"
piratebox_default="192.168.1.1"
target_default="/opt/piratebox"

echo "Downloading The Rabbit Hole..."
wget $download_url
read -p "Connect to your PirateBox now. Press Enter when you're ready..." void
read -p "What is the IP of your PirateBox? [$piratebox_default] " piratebox
piratebox=${piratebox:-$piratebox_default}
read -p "What is the path of the PirateBox installation? [$target_default] " target
target=${target:-$target_default}

echo "Ready to install. You will be asked for the PirateBox root password."
read -p "Proceed with install? [y/n] " yn
case $yn in
    [Nn]* ) exit;;
esac

echo "Decompressing files..."
unzip master.zip
echo "Copying files to PirateBox..."
scp -r rabbithole-master/* root@$piratebox:$target
echo "Cleaning up..."
rm -r master.zip rabbithole-master
echo "Done!"
