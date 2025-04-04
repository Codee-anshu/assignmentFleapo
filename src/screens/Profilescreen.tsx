/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './ProfileScreenStyle';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { data, lists, recentActivity, restaurants, sections } from '../utils/Data';
import { ActivityCardProps, ListItemProps, RestaurantCardProps, SectionItemProps } from '../utils/model';
import { LineChart } from 'react-native-svg-charts';



const SectionItem: React.FC<SectionItemProps> = ({ title, count }) => (
    <View style={styles.sectionContainer}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Icon icon="profile" size={16} color="#fff" />
            <Text>{title}</Text>
        </View>
        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Icon icon="bookmark" size={16} color="#fff" />
            <Text>{count}</Text>
        </View>
        <Icon icon="chevron-right" size={16} color="#fff" />
    </View>
);


// eslint-disable-next-line @typescript-eslint/no-shadow
const ListItem: React.FC<ListItemProps> = ({ title, description, restaurants, nearby, likes, icon }) => (
    <View style={styles.listContainer}>
        <Image source={icon} style={styles.listIcon} />
        <View style={styles.listInfo}>
            <Text style={styles.listTitle}>{title}</Text>
            <Text style={styles.listDescription}>{description}</Text>
            <View style={styles.listStats}>
                <Text style={styles.listText}>{restaurants} restaurants</Text>
                {nearby && (
                    <Text style={[styles.listText, { color: 'green' }]}>
                        {nearby} nearby!
                    </Text>
                )}
                {likes > 0 && (
                    <Text style={styles.listText}>❤️ {likes} likes</Text>
                )}
            </View>
        </View>
    </View>
);


const GraphSection = () => {

    return (
        <View style={styles.graphContainer}>
            <LineChart
                style={{ height: 150 }}
                data={data}
                svg={{ stroke: 'red' }}
                contentInset={{ top: 20, bottom: 20 }}
            />
            <View style={styles.graphLabels}>
                <Text style={styles.graphLabelLeft}>5.3</Text>
                <Text style={styles.graphLabelRight}>9.8</Text>
            </View>
        </View>
    );
};

const ActivityCard: React.FC<ActivityCardProps> = ({ name, location, daysAgo, rating, image }) => (
    <View style={styles.activityContainer}>
        <Image source={image} style={styles.activityImage} />
        <View style={styles.activityInfo}>
            <Text style={styles.activityName}>{name}</Text>
            <Text style={styles.activityLocation}>
                {location} • {daysAgo}
            </Text>
        </View>
        {rating && <Text style={styles.activytyRating}>{rating}</Text>}
    </View>
);

const ProfileHeader = () => (
    <View style={styles.headerContainer}>
        <View style={styles.userInfo}>
            <Text style={styles.username}>@kumargauravof</Text>
            <Text style={styles.fullName}>Kumar Gaurav</Text>
            <Text style={styles.location}>Los Angeles, CA</Text>
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>❤️ Follow</Text>
            </TouchableOpacity>
        </View>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
    </View>
);

// Restaurant Card
const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, rating, image }) => (
    <View style={styles.card}>
        <Image source={image} style={styles.restaurantImage} />
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.restaurantName}>{name}</Text>
    </View>
);

const ProfileScreen = () => {
    return (
        <View>
            {/* Map Section */}
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 34.0522,
                        longitude: -118.2437,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    {restaurants.map((place) => (
                        <Marker
                            key={place.id}
                            coordinate={{
                                latitude: 34.0522 + Math.random() * 0.02, // Mock lat/lng variation
                                longitude: -118.2437 + Math.random() * 0.02,
                            }}
                            title={place.name}
                        />
                    ))}
                </MapView>
            </View>

            {/* Profile Section */}
            <View>
                <ProfileHeader />
            </View>

            {/* Top 8 Restaurants */}
            <View>
                <Text>Gaurav’s Top 8</Text>
                <FlatList
                    data={restaurants}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <RestaurantCard {...item} />}
                />
            </View>

            {/* Recent Activity */}
            <View>
                <Text>Recent Activity</Text>
                {recentActivity.map((item) => (
                    <ActivityCard key={item.id} {...item} />
                ))}
            </View>

            {/* Graph Section */}
            <View>
                <GraphSection />
            </View>

            {/* Lists */}
            <View>
                <Text>Lists</Text>
                {lists.map((item) => (
                    <ListItem key={item.id} {...item} />
                ))}
                <Button title={'See more'} onPress={() => console.log('See more clicked')} />

            </View>

            {/* Following & Hitlist */}
            <View>
                <Text>Following & Hitlist</Text>
                {sections.map((item) => (
                    <SectionItem key={item.id} {...item} />
                ))}
            </View>
        </View>
    );
};


export default ProfileScreen;
