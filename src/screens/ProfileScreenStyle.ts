import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#1a1a1a',
    },
    userInfo: {},
    username: {
        color: '#bbb',
        fontSize: 14,
    },
    fullName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    location: {
        color: '#aaa',
    },
    followButton: {
        backgroundColor: '#ff4d4d',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    card: {
        backgroundColor: '#222',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
    },
    restaurantImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    rating: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        borderRadius: 15,
    },
    restaurantName: {
        color: 'white',
        marginTop: 10,
    },
    map: {
        height: 200,
        width: '100%',
    },
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#181818',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#2a2a2a',
    },
    sectionIcon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    sectionText: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    sectionCount: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#181818',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#2a2a2a',
    },
    listIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    listInfo: {
        flex: 1,
    },
    listTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    listDescription: {
        fontSize: 14,
        color: '#aaa',
        marginVertical: 5,
    },
    listStats: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    listText: {
        fontSize: 14,
        color: '#bbb',
        marginRight: 10,
    },
    seeMoreButton: {
        backgroundColor: '#222',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    seeMoreText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#181818',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#2a2a2a',
    },
    activityImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 15,
    },
    activityInfo: {
        flex: 1,
    },
    activityName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    activityLocation: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 3,
    },
    activytyRating: {
        backgroundColor: 'red',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
        textAlign: 'center',
        overflow: 'hidden',
    },
    graphContainer: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    graphLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    graphLabelLeft: {
        fontSize: 12,
        color: '#aaa',
    },
    graphLabelRight: {
        fontSize: 12,
        color: '#aaa',
    },
    graphPointLabel: {
        position: 'absolute',
        backgroundColor: 'red',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
        textAlign: 'center',
        overflow: 'hidden',
    },
    containerPeople: { flex: 1, backgroundColor: '#111', padding: 15 },
    header: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
    tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
    tab: { paddingVertical: 6, paddingHorizontal: 20, borderRadius: 20, backgroundColor: '#222' },
    activeTab: { backgroundColor: '#fff' },
    tabText: { color: '#aaa' },
    activeTabText: { color: '#000', fontWeight: 'bold' },
    personContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#333' },
    profileImage1: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    personName: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
    personLocation: { fontSize: 14, color: '#888' },
    searchBar: { marginTop: 15, backgroundColor: '#222', padding: 10, borderRadius: 10, color: '#fff' },
});

export default styles;
