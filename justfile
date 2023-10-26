run:
  live-server

deploy:
    rsync -avz --exclude '.git/' ./ david@100.94.129.129:~/dmehnet && ssh david@100.94.129.129 'sudo rsync -avz --delete ~/dmehnet/* /var/www/dmeh.net/'
