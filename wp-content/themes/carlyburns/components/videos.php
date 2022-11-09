<div class="my-12 md:my-16 lg:my-20 xl:my-24">
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