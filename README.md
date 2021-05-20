<p align="center">
<h1 align="center"> NodeJS client for ClickHouse(OLAP) 🔥 </h1>
<p align="center">
<img height='23px' src="https://img.shields.io/badge/node--lts-v14.17.0-brightgreen" alt="Node-LTS">
<img height='23px' src="https://img.shields.io/badge/yarn-v1.22.5-blue" alt="YRAN" />

<p>Install</p>

```console
$yarn install
$yarn start

```

<h2>Server-Side </h2>
<h4>Ubuntu 20.04.2.0 LTS (Focal Fossa)</h4>
<h4>
    Host: 192.168.171.139,
    Port: 8123,
</h4>

<p>Install</p>

```console
# apt update -y
# apt install -y apt-transport-https ca-certificates dirmngr
# apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv E0C56BD4
# echo "deb https://repo.clickhouse.tech/deb/stable/ main/" | sudo tee \
    /etc/apt/sources.list.d/clickhouse.list

# apt install -y clickhouse-server clickhouse-client
# service clickhouse-server start
# clickhouse-client
# systemctl status clickhouse-server
# firewall-cmd --add-port=8123 --permanent
# firewall-cmd --reload
# firewall-cmd --list-ports
# firewall-cmd --list-services
# netstat -lntp
# cd /ect/clickhous-server/
# vim config.xml
            <listen_host>0.0.0.0</listen_host>
            <min_part_size>10000000000</min_part_size>
# 
```

<p align="center">
<h1 align="center"> Recurse </h1>
    [Clickhous](https://clickhouse.tech/)
    [Cube Analytical API Platform](https://cube.dev/)
</p>
