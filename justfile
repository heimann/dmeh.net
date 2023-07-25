run:
  live-server

deploy:
    rsync -avz --exclude '.git/' ./ david@main:~/dmehnet && ssh david@main 'sudo rsync -avz --delete ~/dmehnet/* /var/www/dmeh.net/'
