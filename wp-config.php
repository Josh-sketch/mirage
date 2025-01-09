<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
if(strstr($_SERVER['SERVER_NAME'], 'mirage.local')) {
	define( 'DB_NAME', 'local' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
} else {
	define( 'DB_NAME', 'if0_38016424_mirage' );
	define( 'DB_USER', 'if0_38016424' );
	define( 'DB_PASSWORD', 'YVXl6LpwhAPU' );
	define( 'DB_HOST', 'sql204.infinityfree.com' );
}



/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'f8uq?veN7G!y;7q<:0&?E&x|f:P:mjHVdAv9B^8($E(R#3v1c3%pk&[m8!akQ1Em' );
define( 'SECURE_AUTH_KEY',   '/-gBIWe>*|4z3lg%05R]5|e lu.@|+mG!mmNBvSQhLS E)no&j7AyY?.0QN/eHUs' );
define( 'LOGGED_IN_KEY',     '/R?ODi^B2s(QC#c4-2qg:$P|iUu@TC!eiCNk&w76YzWx|.<x|8v-4EXt$pD(Rj}G' );
define( 'NONCE_KEY',         'h7HH8[Ukn,rLnfOR5x9b41J y8P2.}GB=76cL +wD1pl!BD_drZQkv?D,fd&EjNr' );
define( 'AUTH_SALT',         '0>*B$)1x9u&^x2N@`_TJNDl71.)LUaKue3;O~6*~gyVe(815v/_.)Z_z;)^5f<lh' );
define( 'SECURE_AUTH_SALT',  '$grMlcTK{f0h8oL %6;:s|R@U2/b5zK im<ln^$X$q6*G$8-(qeLf`l3eqXi9JQG' );
define( 'LOGGED_IN_SALT',    'pjP:+d Fu[>p;e05Ej9rjIF-/@#>;/pH7adGMN H[37nyN=C%*2 _0 j?,Zo>&m2' );
define( 'NONCE_SALT',        'A%:bqTP|bo6n%i[55/A&mvLb>WY3Lwed7})W>cHPi0_0#[GS-@L2@2h/]QE`F%49' );
define( 'WP_CACHE_KEY_SALT', 'fls?.DhL-RC5}gCp4KEp9OUJoV7jjS_?1|$i1VHa&+EJ2kKC_+Cj~tVx1|EE[e^T' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
