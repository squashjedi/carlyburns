<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

    <div class="relative leading-[1.75] font-sans">
        <?php require('components/main-menu.php'); ?>
        <?php require('components/main-banner.php'); ?>

        <!-- Videos -->
        <div id="videos" class="py-12 md:py-16 lg:py-20 xl:py-24">
            <div class="px-6 max-w-7xl mx-auto">
                <h2 class="text-3xl sm:text-4xl font-bold">
                    Videos
                </h2>
                <?php require('components/heading-divider.php'); ?>
                <div class="mt-12"></div>
                <?php
                if (have_rows('videos')) {
                    ?>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <?php
                        while (have_rows('videos')) {
                            the_row();
                            ?>
                            <div class="embed-container rounded-md">
                                <?php the_sub_field('video_link'); ?>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>

        <!-- Singles -->
        <div id="singles" class="py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100">
            <div class="px-6 max-w-7xl mx-auto">
                <h2 class="text-3xl sm:text-4xl font-bold">
                    Singles
                </h2>
                <?php require('components/heading-divider.php'); ?>
                <div class="mt-12"></div>
                <?php
                if (have_rows('singles')) {
                    ?>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <?php
                        while (have_rows('singles')) {
                            the_row();
                            ?>
                            <div class="">
                                <a href="<?php the_sub_field('single_link'); ?>" class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 496 512">
                                        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                                    </svg>
                                    <?php the_sub_field('single_name'); ?>
                                </a>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>

        <!-- Gallery -->
        <div id="gallery" class="py-12 md:py-16 lg:py-20 xl:py-24">
            <div class="px-6 max-w-7xl mx-auto">
                <h2 class="text-3xl sm:text-4xl font-bold">
                    Gallery
                </h2>
                <?php require('components/heading-divider.php'); ?>
                <div class="mt-12"></div>
                <?php if( have_rows('gallery') ) { ?>
                    <div id="gallery" class="pswp-gallery">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                            <?php $index = 0; ?>
                            <?php while( have_rows('gallery') ) {
                                the_row(); 
                                $image = get_sub_field('gallery_image')['sizes'];
                                $index += 1;
                                ?>
                                <a
                                    href="<?php echo $image['large']; ?>"
                                    data-pswp-width="<?php echo $image['large-width']; ?>"
                                    data-pswp-height="<?php echo $image['large-height']; ?>"
                                    class="aspect-w-3 aspect-h-4 w-full relative flex cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50"
                                >
                                    <!-- <span class="absolute inset-0 overflow-hidden rounded-md"> -->
                                        <img
                                            src="<?php echo $image['medium_large']; ?>"
                                            class="h-full w-full object-cover object-center rounded-md"
                                            target="_blank"
                                        />
                                    <!-- </span> -->
                                </a>
                            <?php } ?>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>

        <!-- About Me -->
        <div id="about" class="py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100">
            <div class="px-6 max-w-7xl mx-auto">
                <h2 class="text-3xl sm:text-4xl font-bold">
                    About Me
                </h2>
                <?php require('components/heading-divider.php'); ?>
                <div class="mt-12"></div>
                <?php
                $about_me = get_field('about_me');
                ?>
                <div class="grid lg:grid-cols-5 gap-16">
                    <div class="lg:col-span-3">
                        <div class="prose">
                            <?php if ($about_me['about_me_subtitle']) { ?>
                                <h3 class="text-xl font-bold mt-0 mb-6"><?php echo $about_me['about_me_subtitle']; ?></h3>
                            <?php } ?>
                            <?php echo $about_me['about_me_content']; ?>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <h4 class="uppercase font-bold text-sm tracking-widest">Follow My Journey</h4>
                        <div class="mt-6">
                            <div class="font-bold text-2xl leading-loose">
                                <a href="https://www.youtube.com/user/TheCarlyBurnsx">YouTube</a>
                            </div>
                            <div class="font-bold text-2xl leading-loose">
                                <a href="https://www.instagram.com/carlyburnsx">Instagram</a>
                            </div>
                            <div class="font-bold text-2xl leading-loose">
                                <a href="https://open.spotify.com/artist/21fg6Mpi2N9Xs9VEHfAMGh?si=9LA0t1UZR-O5GLkhAgvdOQ&nd=1">Spotify</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- Singing Teacher / Vocal Coach -->
        <div id="vocal" class="py-12 md:py-16 lg:py-20 xl:py-24 bg-pink-200">
            <div class="px-6 max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-5 gap-16">
                    <div class="lg:col-span-3">
                        <h2 class="text-3xl sm:text-4xl font-bold">
                            Singing Teacher / Vocal Coach
                        </h2>
                        <?php require('components/heading-divider.php'); ?>
                        <div class="mt-12"></div>
                        <div class="prose max-w-7xl mx-auto">
                            <?php the_field('vocal_coaching'); ?>
                        </div>
                    </div>
                    <div id="contact" class="lg:col-span-2">
                        <h2 class="text-3xl sm:text-4xl font-bold">
                            Contact Me
                        </h2>
                        <?php require('components/heading-divider.php'); ?>
                        <div class="mt-12"></div>
                        <h4 class="uppercase font-bold text-sm tracking-widest">Send me a message</h4>
                        <div class="mt-6">
                            <?php echo do_shortcode("[wpforms id='51']"); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center text-sm mt-16 text-gray-600">
            Copyright © <?php echo date("Y"); ?>  carlyburns.com.<br />All Rights Reserved.
        </div>
        <div class="text-center text-xs text-gray-400 mt-2 mb-16">Created by <a href="http://paullord.uk">Paul Lord<a></div>

    </div>

    <?php wp_footer(); ?>
</body>
</html>