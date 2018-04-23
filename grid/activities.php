?php
/*
Plugin Name: Activities
Plugin URI: https://chattanooga.gov
Description: This plugin...
Version: 1.00.0
Author: SpecOps
Author URI: http://specops.mycha.co
License: GPLv2
Tags:
Text Domain: activities
*/

function activities_scripts() {
	wp_register_style('style_css', plugins_url('activities') . '/css/style.css');
	wp_enqueue_style('style_css');

	wp_register_script('script_js', plugins_url('activities') . '/js/script.js');
	wp_enqueue_script('script_js');
}
add_action('wp_enqueue_scripts', 'activities_scripts');


/**
 * Activites
 */
function get_n_sort_activities($atts) {
		$atts = shortcode_atts(
		array(
			'accordian' => 'true',
		), $atts, 'display-activities' );

	global $wpdb;

	$return_text = '';
	$post_count = 0;

	//$my_tag_id = get_term_by('name','activities', 'post_tag');

	$args = array(
		'orderby' => 'post_title',
		'order' => 'ASC',
		'tag' => 'activities'  // $my_tag_id->term_id
	);


	$my_posts = get_posts($args);

		foreach ($my_posts as $my_post) {
			$post_count += 1;
			if (1 == $post_count) { // Start div's for first post				
				$return_text .= '<div class="container">'; // .container holds three items plus an accordian
			}
			if (1 == $post_count / 4) { // Every three posts, add accordian then end div's and start a new set
				if ('true' == $atts['accordian']) {
					$return_text .= '<div class="accordian"></div>';  // .accordian opens for selected post
				}
				$return_text .= '</div>'; // End of container
				$return_text .= '<div class="container">';
			}

			$thumb_id = get_post_thumbnail_id($my_post->ID);
			$thumb_url_array = wp_get_attachment_image_src($thumb_id, 'thumbnail-size', true);
			$thumb_url = $thumb_url_array[0];

			$return_text .= '<div class="item">'; // .item holds the content of each individual div in .container

			$return_text .= '<a href="' . $my_post->guid . '"><img src="' . $thumb_url . '" alt="##"></a>';

			$return_text .= '<p>' . $my_post->post_title . '</p>';
			
			$return_text .= '<div class="postContent">' . $my_post->post_content . '</div>';

			$return_text .= '</div>';


		} // end foreach
		if ($post_count >= 1) { // End the last div
			if ('true' == $atts['accordian']) {
				$return_text .= '<div class="accordian"></div>';
			}
			$return_text .= '</div>'; // End of container
		}

	
	return $return_text;
} // function end
add_shortcode('display-activities', 'get_n_sort_activities');
