ARG PHP_VERSION=""
FROM php:${PHP_VERSION:+${PHP_VERSION}-}fpm-alpine
COPY wait-for-it.sh /usr/bin/wait-for-it

RUN chmod +x /usr/bin/wait-for-it

RUN apk update; \
    apk upgrade;

RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo_mysql

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

CMD composer install ; wait-for-it mysqla:3306 -- bin/console doctrine:migrations:migrate ;  php-fpm

EXPOSE 9000
