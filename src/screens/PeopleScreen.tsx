import React from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './ProfileScreenStyle';
import { peopleData } from '../utils/Data';



const PeopleScreen = () => {
    return (
        <View style={styles.containerPeople}>
            <Text style={styles.header}>People</Text>

            {/* Tabs: Friends, Verified, Everyone */}
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                    <Text style={styles.activeTabText}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Verified</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Everyone</Text>
                </TouchableOpacity>
            </View>

            {/* People List */}
            <FlatList
                data={peopleData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.personContainer}>
                        <Image source={item.image} style={styles.profileImage1} />
                        <View>
                            <Text style={styles.personName}>{item.name}</Text>
                            <Text style={styles.personLocation}>{item.location}</Text>
                        </View>
                    </View>
                )}
            />

            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search people"
                placeholderTextColor="#888"
            />
        </View>
    );
};

export default PeopleScreen;
